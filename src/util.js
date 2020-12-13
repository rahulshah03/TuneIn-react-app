import {v4 as uuidv4} from "uuid"

function chillHop() {
    return [
        {
            name: "Snowstalgia",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg",
            artist: "invention_",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10313",
            id: uuidv4(),
            color: ["#C3AAB6","#303852"],
            active: "true"

        },
             {
            name: "Going Back",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-300x300.jpg",
            artist: "Sworn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
            id: uuidv4(),
            color: ["#252944", "#A7BFC2"],
            active: "false"

        },
        {
            name: "Maple Leaf Pt.2",
            cover: "https://i.scdn.co/image/2f8c0667ca30a18b8976f9ed6c6e90f3cee3ec4d",
            artist: "Philantrophe",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
            id: uuidv4(),
            color: ["#394225", "#D4AC74"],
            active: "false"
        }      
    ]
    
}

export default chillHop