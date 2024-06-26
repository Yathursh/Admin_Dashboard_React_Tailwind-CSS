import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-0">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-24 w-24 mt-10"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
            </div>
            <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-10  text-center text-sm text-gray-300">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-blue-300 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}