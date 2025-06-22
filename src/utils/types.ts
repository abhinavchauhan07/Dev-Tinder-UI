export type User={
 _id: string; 
  about: string;
  emailId: string;
  firstName: string;
  lastName: string;
  password: string; 
  photoUrl: string; 
  gender?:string
  skills: string[]; 
  __v: number;
  ts?: string;
}


export type StoreType={
  user:User
  feed:User[]
}
export type apiResponse<T>={
  data:{
    message:string,
    data:T
  }
}

export type LoginApiData={
  message:string,
  data:User
}

export type CustomAxiosError = {
  message: string;
  code: string;
  response: {
    data: string;
    status: number;
    statusText: string;
  };
    status: number;
};

