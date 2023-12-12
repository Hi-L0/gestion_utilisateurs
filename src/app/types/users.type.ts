export type UserType={
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string,
}

export type UsersListType={
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data: UserType[]
}