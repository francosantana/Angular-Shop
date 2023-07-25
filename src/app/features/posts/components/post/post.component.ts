import { Component, Input } from '@angular/core';
import { Post } from '../../models/posts.model';
import { UserData } from 'src/app/core/auth/models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  @Input() post!: Post;
  @Input() user!: UserData | null;

}
