import { Component, OnInit } from '@angular/core';
import { RecordService } from '../services/record.service';
import { UsersService } from "../users.service";

 
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit 
{
  userD:any=[];
  constructor(private userService: UsersService,private recService :RecordService) 
  {
   
  }
  ngOnInit(): void 
  {
    this.recService.get_AllRec().subscribe(data => {

      this.userD = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          phone: e.payload.doc.data()['age'],
          address: e.payload.doc.data()['address'],
          email:e.payload.doc.data()['email']
        };
      })
      console.log(this.userD);

    });
  }
  DeleteRec(record_id)
  {
    this.recService.delete_Rec(record_id);
  }
}
