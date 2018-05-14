module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  let releasePath = function(shipit) {
    return [shipit.config.deployTo,
      'releases', shipit.releaseDirname].join('/');
  };

  shipit.initConfig({
    default: {
      ignores: [
        '.git', 'node_modules'
      ],
      // servers: [{ user, host, port }],
      keepReleases: 2,
      shallowClone: true,
      //If shallowClone is set to false, this directory will be used to clone the repository before deploying it.
      // workspace: String,
      verboseSSHLevel: 1,
      branch: 'master',
      //Directory where the code will be deployed on remote servers.
      deployTo: '/home/ubuntu/web',
      //Repository URL to clone, must be defined using https or git+ssh format.
      repositoryUrl: 'https://github.com/just-leo/ng-universal.git',
    },
    staging: {
      servers: 'ubuntu@34.216.73.99',
      key: '~/Downloads/http-ssh-server.pem',
    },
  })

  shipit.on('init', function() {
    shipit.log('iniialized')
  })

  shipit.on('updated', function() {
    console.log('updated in ' + releasePath(shipit))
    shipit.start('post-update');
  });

  shipit.on('published', function() {
    shipit.start('build')
    console.log('published! start pm2')
  });

  shipit.task('post-update', ['npm-cache-clean', 'npm-install']);

  shipit.blTask('npm-install', function() {
    return shipit.remote(`cd ${releasePath(shipit)} && npm install`);
  });

  shipit.blTask('npm-cache-clean', function() {
    return shipit.remote(`cd ${releasePath(shipit)} && npm cache clean`);
  });

  shipit.task('build', async () => {
    await shipit.remote(`cd ${releasePath(shipit)} && npm run build:universal`)
      .then(([server1Result, server2Result]) => {
          console.log(server1Result.stdout)
        // console.log(server2Result.stdout)
      })
      .catch(error => {
          console.error(error.stderr)
      })
  })
}
