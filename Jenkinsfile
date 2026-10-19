pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install'
      }
    }

    stage('Generate BDD tests') {
      steps {
        bat 'npx bddgen'
      }
    }

    stage('Run tests') {
      steps {
        bat 'npx playwright test'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**',
                       allowEmptyArchive: true
    }
  }
}
