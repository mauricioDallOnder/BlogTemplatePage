import { IIPosts } from "../components/Posts/Posts";


export const PostsApi:IIPosts[] = [
    {
        id: 1,
        author: {
            avatarUrl:"https://i.ibb.co/VpjcHdN/person1.png",
            name:'Mauriciolonder',
            role:'Web developer'
        },
        time: new Date().toDateString(),
        content: [
            { type: "paragraph", ValueContent: "Fala galera,esse é o post 1" },
            { type: "link", ValueContent: "esse é o link 1" },
        ]

    },
    {
        id: 2,
        author: {
            avatarUrl:'https://avatars.githubusercontent.com/u/107154619?v=4',
            name:'John Doe',
            role:'Senior Master God of war'
        },
        time: new Date().toDateString(),
        content: [
            { type: "paragraph", ValueContent: "Fala galera,esse é o post 2" },
            { type: "link", ValueContent: "esse é o link 2" },
        ]

    }
]

