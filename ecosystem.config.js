module.exports = {
  apps : [{
    name: 'ECP API',
    script: 'server.js',

    instances: 0,
    out_file: "/dev/stdout",
    error_file: "/dev/stderr",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    exec_mode: 'cluster'
  }],
};
