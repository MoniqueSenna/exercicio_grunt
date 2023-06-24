module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    'dev/styles/compiled.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            my_target: {
                files: {
                    'dist/styles/output.min.js': ['src/styles/input1.js', 'src/styles/input2.js']
                }
            }
        },
        watch: {
            styles: {
                files:'src/**/*.less', // arquivos a serem monitorados
                tasks:['less'], //tarefa a ser executada quando houver uma alteração
                options: {
                    livereload:true
                }  //opções do livereload (opcional (recarrega automaticamente o navegador)
            },
            scripts: {
                files: ['src/script/*.js'], //arquivos a serem monitorados
                tasks: ['uglify'], //tarefa a ser executada quando houver uma alteração
                options: {
                    livereload: true
                }//opções do livereload(opcional, - recarrega automaticamete o navegador
            }
        }
    
    });

    //carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //registra as tarefas
    grunt.registerTask('build', ['less', 'uglify']);
    grunt.registerTask('default', ['watch']);
};