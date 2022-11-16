import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from '../../../layout/admin/navigation/navigation';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() type: string;

  public navigation: any;
  public nav1: any;
  breadcrumbList: Array<any> = [];
  public navigationList: Array<any> = [];

  constructor(private route: Router, public nav: NavigationItem, private titleService: Title) {
    // this.navigation = this.nav.get();
    // this.type = 'theme2';
    // this.setBreadcrumb();
  }

  ngOnInit() {
    let routerUrl: string;
    routerUrl = this.route.url;
    if (routerUrl && typeof routerUrl === 'string') {
      this.filterNavigation(routerUrl);
    }
  }

  // setBreadcrumb() {
  //   let routerUrl: string;
  //   this.route.events.subscribe((router: any) => {
  //     routerUrl = router.urlAfterRedirects;
  //     if (routerUrl && typeof routerUrl === 'string') {
  //       this.breadcrumbList.length = 0;
  //       const activeLink = router.url;
  //       this.filterNavigation(activeLink);
  //     }
  //   });
  // }

  filterNavigation(activeLink) {
    // let result = [];
    // let title = 'Welcome';
    // this.navService.getUserMenu().subscribe(res => {
    //   console.log('result1234: ', res.body);
    //   this.navigation = res.body;
    //   this.navigation.forEach((a) => {
    //     console.log('type: ', a.type , 'url: ', a.url);
    //     if (a.type === 'item' && 'url' in a && a.url === activeLink) {
    //       result = [
    //         {
    //           url: ('url' in a) ? a.url : false,
    //           title: a.title,
    //           breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
    //           type: a.type
    //         }
    //       ];
    //       title = a.title;
    //       console.log('result1: ', result);
    //     } else {
    //       console.log('testing', 'children' in a);
    //       if (a.type === 'group' && 'children' in a) {
    //         console.log('result121212: ');
    //         a.children.forEach((b) => {
    //           console.log('b.type : ', b.type, 'in b', 'url' in b, ' url : ', b.url, activeLink);
    //           if (b.type === 'item' && 'url' in b && b.url === activeLink) {
    //             console.log('b.type1 : ', b.type, 'in b1', 'url' in b, ' url1 : ', b.url, activeLink);
    //             result = [
    //               {
    //                 url: ('url' in b) ? b.url : false,
    //                 title: b.title,
    //                 breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //                 type: b.type
    //               }
    //             ];
    //             title = b.title;
    //             console.log('result2: ', result);
    //           } else {
    //             if (b.type === 'collapse' && 'children' in b) {
    //               b.children.forEach((c) => {
    //                 if (c.type === 'item' && 'url' in c && c.url === activeLink) {
    //                   result = [
    //                     {
    //                       url: ('url' in b) ? b.url : false,
    //                       title: b.title,
    //                       breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //                       type: b.type
    //                     },
    //                     {
    //                       url: ('url' in c) ? c.url : false,
    //                       title: c.title,
    //                       breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
    //                       type: c.type
    //                     }
    //                   ];
    //                   title = c.title;
    //                   console.log('result3: ', result);
    //                 } else {
    //                   if (c.type === 'collapse' && 'children' in c) {
    //                     c.children.forEach((d) => {
    //                       if (d.type === 'item' && 'url' in d && d.url === activeLink) {
    //                         result = [
    //                           {
    //                             url: ('url' in b) ? b.url : false,
    //                             title: b.title,
    //                             breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //                             type: b.type
    //                           },
    //                           {
    //                             url: ('url' in c) ? c.url : false,
    //                             title: c.title,
    //                             breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
    //                             type: c.type
    //                           },
    //                           {
    //                             url: ('url' in d) ? d.url : false,
    //                             title: d.title,
    //                             breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
    //                             type: d.type
    //                           }
    //                         ];
    //                         title = d.title;
    //                         console.log('result4: ', result);
    //                       }
    //                     });
    //                   }
    //                 }
    //               });
    //             }
    //           }
    //         });
    //       }
    //     }
    //   });
    //   this.navigationList = result;
    //   console.log('total: ', result);
    //   console.log('navigationList: ', this.navigationList);
    // });

    // this.navigation.forEach((a) => {
    //   console.log('type: ', a.type , 'url: ', a.url);
    //   if (a.type === 'item' && 'url' in a && a.url === activeLink) {
    //     result = [
    //       {
    //         url: ('url' in a) ? a.url : false,
    //         title: a.title,
    //         breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
    //         type: a.type
    //       }
    //     ];
    //     title = a.title;
    //     console.log('result1: ', result);
    //   } else {
    //     if (a.type === 'group' && 'children' in a) {
    //       a.children.forEach((b) => {
    //         if (b.type === 'item' && 'url' in b && b.url === activeLink) {
    //           result = [
    //             {
    //               url: ('url' in b) ? b.url : false,
    //               title: b.title,
    //               breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //               type: b.type
    //             }
    //           ];
    //           title = b.title;
    //           console.log('result2: ', result);
    //         } else {
    //           if (b.type === 'collapse' && 'children' in b) {
    //             b.children.forEach((c) => {
    //               if (c.type === 'item' && 'url' in c && c.url === activeLink) {
    //                 result = [
    //                   {
    //                     url: ('url' in b) ? b.url : false,
    //                     title: b.title,
    //                     breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //                     type: b.type
    //                   },
    //                   {
    //                     url: ('url' in c) ? c.url : false,
    //                     title: c.title,
    //                     breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
    //                     type: c.type
    //                   }
    //                 ];
    //                 title = c.title;
    //                 console.log('result3: ', result);
    //               } else {
    //                 if (c.type === 'collapse' && 'children' in c) {
    //                   c.children.forEach((d) => {
    //                     if (d.type === 'item' && 'url' in d && d.url === activeLink) {
    //                       result = [
    //                         {
    //                           url: ('url' in b) ? b.url : false,
    //                           title: b.title,
    //                           breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
    //                           type: b.type
    //                         },
    //                         {
    //                           url: ('url' in c) ? c.url : false,
    //                           title: c.title,
    //                           breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
    //                           type: c.type
    //                         },
    //                         {
    //                           url: ('url' in d) ? d.url : false,
    //                           title: d.title,
    //                           breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
    //                           type: d.type
    //                         }
    //                       ];
    //                       title = d.title;
    //                       console.log('result4: ', result);
    //                     }
    //                   });
    //                 }
    //               }
    //             });
    //           }
    //         }
    //       });
    //     }
    //   }
    // });
  }

}
