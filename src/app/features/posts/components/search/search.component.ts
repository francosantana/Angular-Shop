import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchInput = new FormControl('')

  constructor(private postsService: PostsService){}

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(
      value => {
        if(!value) return
        this.postsService.searchPost(value).subscribe()
      }
    )
  }



}
