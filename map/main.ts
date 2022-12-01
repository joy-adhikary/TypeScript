

type mixed = {
    name: string,
    lastName: string,
    id: number,
    dept: string,
    job_title: string,
    stack_type: string
}

let joy: mixed[]=[];

let map: Map<number, mixed[]> = new Map<number, mixed[]>();

joy.push({name:"joy",lastName:"adhikary",id:62,dept:"cse",job_title:"Junior_soft_eng",stack_type:"full"});
joy.push({name:"joy1",lastName:"adhikary",id:62,dept:"cse",job_title:"Junior_soft_eng",stack_type:"full"});


console.log(joy)

export{}