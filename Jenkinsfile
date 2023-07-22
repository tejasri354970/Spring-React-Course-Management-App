pipeline {
    agent any

    stages {
        stage('Clone Git Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/tejasri354970/Spring-React-Course-Management-App.git'
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageName = 'tejasudheer/app'
                    def imageTag = 'latest'
                    docker.build(imageName + ':' + imageTag, '.')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    def dockerHubCreds = credentials('docker-hub-credentials-id')
                    docker.withRegistry('https://index.docker.io/v1/', dockerHubCreds) {
                        def imageName = 'tejasudheer/app'
                        def imageTag = 'latest'
                        docker.image(imageName + ':' + imageTag).push()
                    }
                }
            }
        }

    }
}
