import { Card } from './card.model';


export class BlogService {

  private data: Card[] = [];

  addData():Card[] {
    return this.data
  }
  
}
