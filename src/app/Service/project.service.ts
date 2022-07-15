import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  projects = [
    {
      id: "7",
      image: "../../../assets/projectscreenshots/AirLine/1.jpg",
      projectname: "Air-Line Reservation",
      projectdate: "January 2020",
      projectType: "Web App",
      link: "",
      description: "In this project user can check your Flight details and check availability and check your status and book. There are two roles Admin and User. Admin can add any flight, add flight company and airport also. User can check history also.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/AirLine/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/4.jpg"
        },
      ]
    },
    {
      id: "1",
      image: "../../../assets/projectscreenshots/Ayuda/ayuda.jpg",
      projectname: "Ayuda",
      projectdate: "October 2020",
      projectType: "Web App",
      link: "https://ayudavos.web.app",
      description: "This is my intern project. in this project user can test covid symptoms without any cost. And there are also check country covid status. In tihs project my role is a Front-End Developer and using angular.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/ayuda.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/4.jpg"
        },
      ]
    },
    {
      id: "2",
      image: "../../../assets/projectscreenshots/Bus/1.jpg",
      projectname: "Bus Service",
      projectdate: "February 2021",
      projectType: "Web App",
      link: "",
      description: "This is a very advanced project. this project is created in Angular 11, Spring Boot, Microservice, Hibernate, Rest API, MySQL, This is the social project. In this application user can book your bus add your bus if user have your bus. in this platform user easily do your job and improve your work performance.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Bus/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/4.jpg"
        },
      ]
    },
    {
      id: "3",
      image: "../../../assets/projectscreenshots/liveChat/1.jpg",
      projectname: "Live Chat",
      projectdate: "June 2020",
      projectType: "Web App",
      description: "This project created in Angular & firebase. In this project you can log in and after you can create a room and invite your friend after you can chat. This project is taken very low internet access. And very low user details we need only one gmail account. And its free forver.",
      link: "https://livemessanging.web.app/login",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/liveChat/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/4.jpg"
        },
      ]
    },
    {
      id: "4",
      image: "../../../assets/projectscreenshots/Smart City/1.jpg",
      projectname: "Smart City",
      projectdate: "March 2020",
      projectType: "Web App",
      link: "https://panipatsmartcity.web.app",
      description: "This is a social project. Any person can improve your social skills about Panipat history and others like Panipat public service, Panipat online marketing, and Panipat industry. This project made in angular and spring boot ( microservices, Spring security ) and backend. This project made by Vikas Dhiman.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Smart City/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/4.jpg"
        },
      ]
    },
    {
      id: "5",
      image: "../../../assets/projectscreenshots/OnlineShopping/1.jpg",
      projectname: "Online Shopping",
      projectdate: "August 2019",
      projectType: "Web App",
      link: "",
      description: "In this project user can book your product easily, If user have your shop so, user can register yourself easily without any cost and sale your product easily. In this project user can made your cart check your booking history also.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/4.jpg"
        },
      ]
    },
    {
      id: "6",
      image: "http://www.foodenginepos.com/img/features/Online_Apps.jpg",
      projectname: "Online Food Ordering",
      projectdate: "February 2019",
      projectType: "Web App",
      link: "",
      description: "Online Food Ordering project have my first project. In this project hear user can order your food easily and Admin can add you dishes also.",
      projectImages: [
        {
          projImage: "http://www.foodenginepos.com/img/features/Online_Apps.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/3.jpg"
        },
      ]
    }
  ]

  constructor() { }


  getall() {
    return this.projects;
  }

  // getById(id:any):any
  // {
  //   for(let i=0;i<this.projects.length;i++)
  //   {
  //     if(this.projects[i].id===id)
  //     {
  //       return this.projects[i];
  //     }
  //   }
  // }

  getById(id: any) {
    let res = null;
    this.projects.forEach(element => {
      if (element.id === id) {
        res = element;
      }
    });
    return res;
  }

}
