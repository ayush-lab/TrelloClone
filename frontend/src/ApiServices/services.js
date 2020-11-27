import axios from './axiosUrl';

class AuthServices {

    register(data) {
        return axios.post('/auth/user/',data)
 }

    otp(data){
        return axios.post("/auth/verify/",data)
    }


    otpResend(data){
        return axios.post('/auth/otp/resend/',data)
        

    }


    login(data) {
        return axios.post('/auth/login/',data)
       
    }

    VerifyEmail(data){
        return axios.post('/auth/password/reset/',data);
    }

    VerifyOtp(data){
        return axios.post('/auth/password/reset/verify/',data);
    }

    ResetPassword(data,id){
        return axios.patch(`/auth/user/${id}/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            
            }});
    }
    

    logout(){
       localStorage.clear();
    }


    getCurrentUser(){
        return localStorage.getItem('user');
    }

    getUserName(){
       let userName=localStorage.getItem('userName');
       if(userName!=null)
        userName= userName.charAt(0).toUpperCase() + userName.slice(1);
        return userName;
    }

    CreateBoard(data){
        return axios.post("/boards/",data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            }
        });
    }

    Boards(){
        return axios.get(`boards/`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            
            }
        })
    }

     StarringBoards(BoardId,data){
        return axios.put(`boards/${BoardId}/star/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            
            }
        })
    }




    BoardList(id,data){
        return axios.post(`/boards/${id}/lists/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            }
        });
    }

    BoardCard(id,data){
        return axios.post(`/lists/${id}/cards/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            }
        });
    }

    GetBoard(id){
        return axios.get(`/boards/${id}/`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            }
        });
    }

    EditCard(CardId,data){
        return axios.put(`/cards/${CardId}/edit/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    EditList(ListId,data){
        return axios.put(`/lists/${ListId}/edit/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }


    EditBoard(boardId,data){
        return axios.put(`/boards/${boardId}/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }


    // To add and remove members in the board

    AddMembers(BoardId,data){
        return axios.post(`/boards/${BoardId}/edit/members/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    RemoveMembers(BoardId,data){
        return axios.patch(`/boards/${BoardId}/edit/members/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

     


    AddMembersCard(BoardId,data){
        return axios.post(`/cards/${BoardId}/members/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    // To leave a board
   
    LeaveBoard(BoardId,data){
        return axios.put(`boards/${BoardId}/members`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    CreateTeam(data){
        return axios.post(`/teams/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    // view the list of team of a user

    ViewTeam(){
        return axios.get(`/teams/`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    ViewTeamDetails(id){
        return axios.get(`/teams/${id}`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }


    AddMembersTeam(TeamId,data){
        return axios.post(`/teams/${TeamId}/add/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    RemoveTeamMembers(TeamId,data){
        return axios.post(`/teams/${TeamId}/remove/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }


    Profile(user_id){
        return axios.get(`/auth/user/${user_id}/`,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }


    EditProfile(user_id,data){
        return axios.patch(`/auth/user/${user_id}/`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }

    
}

export default new AuthServices();