import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged:boolean = false;
  user!:User|any;
  houses:Array<string> = [ 'gryffindor', 'slytherin',
    'ravenclaw', 'hufflepuff' ];

  constructor() {
    if (!this.getUsers()) {
      localStorage.setItem('users', JSON.stringify([]));
      var [user]:any = JSON.parse(localStorage.getItem('users')!);
    } else if (user) {
      this.user = user;
      this.isLogged = true;
    }

    if (this.getUsers().length == 0) {
      this.houses.forEach(item => {
        let preset;
        switch (item) {
          case 'gryffindor': preset = 'godric'; break;
          case 'slytherin': preset = 'salazar'; break;
          case 'ravenclaw': preset = 'rowena'; break;
          case 'hufflepuff': preset = 'helga'; break;
          default: preset = ''; break;
        }
        this.addUser({
          id: this.houses.findIndex(elem => elem == item),
          userName: preset,
          email: item[0] + '@' + item[item.length - 1] + '.uk',
          password: item,
          house: item
        })
      });
      this.addUser({
        id:this.getUsers().length, userName: 'alumno',
        email: 'h@s', password: 'hogwarts', house: ''
      });
    }
  }

  addUser(user:any):void {
    let usersArr:Array<User> = this.getUsers();
    usersArr.push(user);
    this.setUsers(usersArr);
  }
  getUser(id:number):User {
    const [user] = this.getUsers().filter(user => user.id === id)
    return user;
  }
  getUsers():Array<User> {
    return JSON.parse(localStorage.getItem('users')!);
  }
  setUser(updatedUser:any):void {
    let usersArr:Array<User> = this.getUsers();
    usersArr[usersArr.findIndex(user => user.id === updatedUser.id)] = updatedUser;
    this.setUsers(usersArr);
  }
  setUsers(usersArr:Array<User>):void {
    localStorage.setItem('users', JSON.stringify(usersArr));
  }
}

export class User {
  id!:number;
  userName!:string;
  email!:string;
  password!:string;
  house:string = '';
}