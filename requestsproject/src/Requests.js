import React,{useState,useEffect}  from "react"
import axios from "axios"

const Requests = (props) => {
    const [token, setToken] = useState([]);
    
    useEffect(() => {
      
  //const hgt =()=>{
        const url = "http://localhost:3000/oauth/token";
  
      axios
        .post(url, null, {
          params: {
            client_id: "trusted_client",
            client_secret: "secret",
            grant_type: "password",
            password: "5FrKAS9N6nGpTLqT",
            username: "operator-rest-client",
          },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((response) => {
          setToken(response.data);
        })
        .catch((err) => console.warn(err));
  
      const { access_token } = token;
     console.log(access_token);
    
     
  
    //  }
      
      //  console.log("it works")
      //  console.log(token)
  
      //   };
    
     
  
     
    }, []);
    
  
    const getToken =(token)=>{
      const {access_token}=token
      localStorage.setItem('access_token', JSON.stringify(access_token))
        return access_token
    }
  
    
  
   
    const vla =()=>{
     // const {access_token} = token
      const access_token = getToken(token)
  
      
      console.log(access_token)
      
     // const authString = "Bearer".concat(access_token);
      const getUrl =
        `http://localhost:3000/rest/v1/operator/subscriptions?page=0`;
      axios
        .get(getUrl, { headers: { "Authorization" : `Bearer ${access_token}`,
  }} )
        .then((response) => {
          console.log(response.data)
          return response.data
          // setGetRequest(response.data)
          // console.log(getResuest);
        }).catch(error => console.log(error));
    
    
     // const{access_token}=token
      // console.log(getResuest)
      // return getResuest
    }
  
    // const rest =()=>{
    //   console.log(getResuest)
    // }
  
  
    
    
  
    return (
      <button className="button" onClick={vla}>
        {" "}
        PRESS ME
      </button>
    );
  };
  
  export default Requests;
  