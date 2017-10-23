export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: '首页',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'one',
            data: {
              menu: {
                title: '页面1',
              }
            }
          },
          {
            path: 'two',
            data: {
              menu: {
                title: '页面2',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: '数据统计',
            icon: 'fa fa-bar-chart',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'echarts',
            data: {
              menu: {
                title: '百度ECharts',
              }
            }
          },
          {
            path: 'flot',
            data: {
              menu: {
                title: 'Flot',
              }
            }
          },
          {
            path: 'map',
            data: {
              menu: {
                title: 'GoogleMap',
              }
            }
          }
        ]
      },
      {
        path: 'email',
        data: {
          menu: {
            title: '信箱',
            icon: 'fa fa-envelope-o',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'inbox',
            data: {
              menu: {
                title: '收件箱',
              }
            }
          },
          {
            path: 'detail',
            data: {
              menu: {
                title: '查看邮件',
              }
            }
          },
          {
            path: 'compose',
            data: {
              menu: {
                title: '写信',
              }
            }
          },
        ]
      },
      {
        path: 'widgets',
        data: {
          menu: {
            title: '小工具',
            icon: 'fa fa-flask',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'news',
        data: {
          menu: {
            title: 'V2.0新增',
            icon: 'fa fa-globe',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'nestable_list',
            data: {
              menu: {
                title: '嵌套列表',
              }
            }
          },
          {
            path: 'timeline',
            data: {
              menu: {
                title: '时间轴',
              }
            }
          },
          {
            path: 'codemirror',
            data: {
              menu: {
                title: '代码编辑器',
              }
            }
          },
          {
            path: 'tree',
            data: {
              menu: {
                title: '树形视图',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: '表单',
            icon: 'fa fa-pencil-square-o',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'basic',
            data: {
              menu: {
                title: '基本表单',
              }
            }
          },
          {
            path: 'plugin',
            data: {
              menu: {
                title: '插件',
              }
            }
          },
          {
            path: 'upload',
            data: {
              menu: {
                title: '文件上传',
              }
            }
          },
          {
            path: 'avatar',
            data: {
              menu: {
                title: '头像裁剪',
              }
            }
          },
          {
            path: 'from_avatar',
            data: {
              menu: {
                title: '头像上传编辑器',
              }
            }
          },
          {
            path: 'date',
            data: {
              menu: {
                title: 'layerDate',
              }
            }
          },
        ]
      },
      {
        path: 'editor',
        data: {
          menu: {
            title: '编辑器',
            icon: 'fa fa-pencil',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'markdown',
            data: {
              menu: {
                title: 'MarkDown',
              }
            }
          },
          {
            path: 'quill',
            data: {
              menu: {
                title: 'Quill编辑器',
              }
            }
          }
        ]
      },
      {
        path: 'page',
        data: {
          menu: {
            title: '页面',
            icon: 'fa fa-television',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'contact',
            data: {
              menu: {
                title: '联系人',
              }
            }
          },
          {
            path: 'personal',
            data: {
              menu: {
                title: '个人资料',
              }
            }
          },
          {
            path: 'customer',
            data: {
              menu: {
                title: '客服管理',
              }
            }
          },
          {
            path: 'file',
            data: {
              menu: {
                title: '文件管理器',
              }
            }
          },
          {
            path: 'date',
            data: {
              menu: {
                title: '日历',
              }
            }
          },
          {
            path: 'blog',
            data: {
              menu: {
                title: '博客',
              }
            }
          },
          {
            path: 'faq',
            data: {
              menu: {
                title: 'FAQ',
              }
            }
          },
          {
            path: 'blog',
            data: {
              menu: {
                title: '博客',
              }
            }
          },
          {
            path: 'tiemline',
            data: {
              menu: {
                title: '时间轴',
              }
            }
          },
          {
            path: 'blog',
            data: {
              menu: {
                title: '博客',
              }
            }
          },
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI',
            icon: 'fa fa-desktop',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: '拖拽排序',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: '通知 & 提示',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: '视频、音频',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: '弹窗插件',
              }
            }
          }
        ]
      },
      {
        path: 'table',
        data: {
          menu: {
            title: '表格',
            icon: 'fa fa-table',
            selected: false,
            expanded: false,
            order: 600,
          }
        },

      },
      {
        path: 'album',
        data: {
          menu: {
            title: '相册',
            icon: 'fa fa-picture-o',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: 'basic',
            data: {
              menu: {
                title: "基本图片"
              }
            }
          },
          {
            path: 'switch',
            data: {
              menu: {
                title: '图片切换'
              }
            }
          },
          {
            path: 'blueimp',
            data: {
              menu: {
                title: 'Nlueimp相册'
              }
            }
          }
        ]
      },
      {
        path: 'css',
        data: {
          menu: {
            title: 'CSS动画',
            icon: 'fa fa-magic',
            selected: false,
            expanded: false,
            order: 700,
          }
        }
      },
    ]
  }
];
