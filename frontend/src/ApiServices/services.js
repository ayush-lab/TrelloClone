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
        return axios.post(`/auth/user/${id}`,data);
    }
    
    UpdatedCourse(data){
        return axios.put('home/courseUpdate',data);
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
        return axios.put(`cards/${CardId}/edit`,data,{
            headers: {
                
                Authorization: 'Bearer '+ localStorage.getItem('access')
            } 
        })
    }







    
}

export default new AuthServices();