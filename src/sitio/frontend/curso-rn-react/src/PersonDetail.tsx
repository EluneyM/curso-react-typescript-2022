import React, { useEffect, useState } from "react";

interface Person {
    id: number,
    name: string,
    lastName: string,
}


// TODO: search id  
function PersonDetail() {
    const [ person, setPerson ] = useState<Person|null>(null);
    useEffect(() => {
        const p = {id:1, name: 'Marcos', lastName: 'Mendez'};
       setPerson(p);
    },[]);
    return <div>
       {person?.name} 
    </div>;
}

export default PersonDetail;
