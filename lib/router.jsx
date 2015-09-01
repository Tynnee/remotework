FlowRouter.route('/', {
  name: 'home',
  action: (params) => {
    renderMainLayoutWith(<JobsList />);
    setTitle('Jobs');
  }
});

FlowRouter.route('/jobs/add', {
  name: 'addJob',
  action: (params) => {
    renderMainLayoutWith(<AddJob />);
    setTitle('Add job')
  }
});

FlowRouter.route('/jobs/:_id/show', {
  name: 'showJob',
  action: (params) => {
    renderMainLayoutWith((<ShowJob />));
    var jobTitle = 'Job';
    Tracker.autorun(() => {
      if (Jobs.findOne()) {
        jobTitle = (Jobs.findOne().title);
      }
      setTitle(jobTitle);
    });
  }
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  })
};
