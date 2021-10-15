
export class Quote {
    // id!: number;
    // name!: string;
    // description!: string;
  
  
  
    showDescription: boolean;
    constructor(public id: number,public name: string,public author : string,public description: string ,public completeDate: Date , public downvotes: number,public upvotes: number,){
      this.showDescription=false; // id!: number;
    }
    
  }
  