import { Helmet } from 'react-helmet';

export default function TitlePage(props){
    return(
        <Helmet>
            <title>{props.name}</title>
        </Helmet>
    )
 }