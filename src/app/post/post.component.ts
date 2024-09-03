import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

posts: any[] = [];
page: number = 1;
pagesize: number = 10;
totalpages!: number;

  constructor(private postservice: PostService){}


  ngOnInit(): void {
   this.loaddata();
  }

  loaddata(): void {
    this.postservice.getpost().subscribe(data => {
      this.totalpages = Math.ceil(data.length / this.pagesize);
      this.posts = data.slice((this.page - 1) * this.pagesize, this.page * this.pagesize);

    });
  }

nextpage(): void {
  if(this.page < this.totalpages) {
    this.page++;
    this.loaddata();
  }
}

previouspage(): void {
  if(this.page > 1) {
    this.page--;
    this.loaddata();
  }
}


}
