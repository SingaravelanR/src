export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      
	  {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 250
          }
        }
      },
      {
        path: 'alerts',
        data: {
          menu: {
            title: 'Alerts',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 0,
          }
        }
      },
      {
        path: 'workspace',
        data: {
          menu: {
            title: 'Workspace',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'datasetConfig',
            data: {
              menu: {
                title: 'Dataset Configuration',
              }
            }
          },
          {
            path: 'loadingConfig',
            data: {
              menu: {
                title: 'Loading Configuration',
              }
            }
          }
          {
            path: 'ruleConfig',
            data: {
              menu: {
                title: 'Rule Configuration',
              }
            }
          }
          {
            path: 'jobConfig',
            data: {
              menu: {
                title: 'Job Configuration',
              }
            }
          }
        ]
      },
      {
        path: 'resolutionDasgboard',
        data: {
          menu: {
            title: 'Resolution Dashboard',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        }
      },
      
    ]
  }
];
