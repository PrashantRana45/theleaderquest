import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSchoolingComponent } from './components/pages/modern-schooling/modern-schooling.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CoursesDetailsComponent } from './components/pages/courses-details/courses-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { CourseCategoryComponent } from './components/pages/course-category/course-category.component';
import { CompareComponent } from './components/pages/compare/compare.component';
import { FreeCoursesComponent } from './components/pages/free-courses/free-courses.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './components/pages/about/about.component';
import { PoliciesComponent } from './components/pages/policies/policies.component';

const routes: Routes = [
    {path: '', component: ModernSchoolingComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:url', component: BlogDetailsComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/:url', component: CoursesDetailsComponent},
    {path: 'events', component: EventsComponent},
    {path: 'event/:url', component: EventsDetailsComponent},
    {path: 'course-category/:url', component: CourseCategoryComponent},
    {path: 'compare/:id/:url', component: CompareComponent},
    {path: 'free-courses', component: FreeCoursesComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'policies', component: PoliciesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }