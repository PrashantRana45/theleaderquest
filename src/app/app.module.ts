import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountUpModule } from 'ngx-countup';
import { StickyNavModule } from 'ng2-sticky-nav';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LightboxModule } from 'ngx-lightbox';
import { AccordionModule } from "ngx-accordion";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactService } from 'src/app/services/contact.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { ModernSchoolingComponent } from './components/pages/modern-schooling/modern-schooling.component';
import { ModernSchoolingBannerComponent } from './components/pages/modern-schooling/modern-schooling-banner/modern-schooling-banner.component';
import { ModernSchoolingAboutComponent } from './components/pages/modern-schooling/modern-schooling-about/modern-schooling-about.component';
import { ModernSchoolingCoursesComponent } from './components/pages/modern-schooling/modern-schooling-courses/modern-schooling-courses.component';
import { ModernSchoolingEventsComponent } from './components/pages/modern-schooling/modern-schooling-events/modern-schooling-events.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { HomeBlogComponent } from './components/common/home-blog/home-blog.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { PartnerSliderComponent } from './components/common/partner-slider/partner-slider.component';
import { SubscribeStyleTwoComponent } from './components/common/subscribe-style-two/subscribe-style-two.component';
import { ExperienceComponent } from './components/common/experience/experience.component';
import { LifestyleComponent } from './components/common/lifestyle/lifestyle.component';
import { ProgramComponent } from './components/common/program/program.component';
import { ServicesComponent } from './components/common/services/services.component';
import { SubscribeStyleThreeComponent } from './components/common/subscribe-style-three/subscribe-style-three.component';
import { SubscribeStyleFourComponent } from './components/common/subscribe-style-four/subscribe-style-four.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { BoxesComponent } from './components/common/boxes/boxes.component';
import { FunfactsStyleOneComponent } from './components/common/funfacts-style-one/funfacts-style-one.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { TopCategoriesComponent } from './components/common/top-categories/top-categories.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesDetailsComponent } from './components/pages/courses-details/courses-details.component';
import { EventsComponent } from './components/pages/events/events.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { CourseCategoryComponent } from './components/pages/course-category/course-category.component';
import { CompareComponent } from './components/pages/compare/compare.component';
import { FreeCoursesComponent } from './components/pages/free-courses/free-courses.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './components/pages/about/about.component';
import { PoliciesComponent } from './components/pages/policies/policies.component';

import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { FeaturesStyleOneComponent } from './components/common/features-style-one/features-style-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PartnerComponent,
    ModernSchoolingComponent,
    ModernSchoolingAboutComponent,
    ModernSchoolingCoursesComponent,
    ModernSchoolingEventsComponent,
    BlogComponent,
    PartnerSliderComponent,
    SubscribeComponent,
    SubscribeStyleTwoComponent,
    ExperienceComponent,
    LifestyleComponent,
    ProgramComponent,
    ServicesComponent,
    SubscribeStyleThreeComponent,
    SubscribeStyleFourComponent,
    OverviewComponent,
    BoxesComponent,
    FunfactsStyleOneComponent,
    CategoriesComponent,
    TopCategoriesComponent,
    FeedbackComponent,
    ModernSchoolingBannerComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    EventsComponent,
    EventsDetailsComponent,
    HomeBlogComponent,
    CourseCategoryComponent,
    CompareComponent,
    FreeCoursesComponent,
    ContactUsComponent,
    AboutUsComponent,
    PoliciesComponent,
    PremiumAccessComponent,
    FeaturesStyleOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    CountUpModule,
    StickyNavModule,
    TabsModule,
    NgxScrollTopModule,
    LightboxModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [DatePipe,
    ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }