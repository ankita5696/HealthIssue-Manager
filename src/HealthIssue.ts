export class HealthIssue {
    constructor(            
        public id: number,
        public healthissue: string,
        public code: string,
        public hcc: string,
        public enteredDate: string,
        public status : string
    ){}
}
