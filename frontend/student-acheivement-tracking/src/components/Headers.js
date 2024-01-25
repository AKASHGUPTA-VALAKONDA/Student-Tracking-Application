import React,{Component} from "react";
import { Link } from 'react-router-dom';

import '../style/Header.css';
class Headers extends Component{
    render(){
        return(
                <div className="header">
                    <Link className="a float-right" to="/home">
  HOME
</Link>
<Link className="a float-right" to="/about">
  ABOUT
</Link>
<Link className="a float-right" to="/login">
  LOGIN
</Link>
<Link className="a float-right" to="/register">
  REGISTER
</Link>

                </div>
        );
    }
}
export default Headers;