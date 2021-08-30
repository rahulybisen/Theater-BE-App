export interface UserInfo {
    loggedInOrganizationId: string;
    loggedInUserId:string;
    loggedInUserRole:string[];
    loggedInUserName:string;
    isSuperAdmin:boolean;
    isOrgAdmin:boolean;
    isTeacher:boolean;
    isStudent:boolean;
    isSupervisor:boolean;
}

export interface UserContext {
    userInfo:UserInfo;
    jwtToken: string;
}