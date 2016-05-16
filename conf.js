exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  rootElement: '#ng-app' // because the flow is not using ng-app="myApp" class="my-app"
}
