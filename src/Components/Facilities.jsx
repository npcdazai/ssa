import { Badge, Card } from "react-bootstrap";
import '../styles/TennisCard.css';
import camps from '../assets/camps.png';

const cardData = [
    {
        id: 1,
        title: "Tennis",
        badges: ["9 Clay Courts", "4 Hard Courts"],
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        position: "top",
        textColor: "#fff"
    },
    {
        id: 2,
        title: "Tennis",
        badges: ["9 Clay Courts", "4 Hard Courts"],
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        position: "top",
        textColor: "#fff"
    },
    {
        id: 3,
        title: "Tennis",
        badges: ["9 Clay Courts", "4 Hard Courts"],
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        position: "bottom",
        textColor: "#000"
    },
    {
        id: 4,
        title: "Tennis",
        badges: ["9 Clay Courts", "4 Hard Courts"],
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        position: "bottom",
        textColor: "#000"
    },
];

const renderCard = ({ id, title, badges, text, textColor }) => (
    <Card key={id} style={{ backgroundColor: "transparent", padding: "2rem", width: "50%" }} className="tennis-card border-0">
        <div className="video-thumbnail">
            <Card.Img
                src={camps}
                alt="Tennis Court"
                style={{ height: "373px", width: "386px" }}
            />
        </div>
        <Card.Body style={{ width: "60%" }} className="rounded-bottom">
            <Card.Title className="Matter" style={{ color: textColor, fontSize: "28px" }}>{title}</Card.Title>
            <div className="mb-2">
                {badges.map((badge, idx) => (
                    <Badge
                        key={idx}
                        style={{ fontSize: "13px" }}
                        className="text-dark rounded-bottom me-2 Matter"
                        bg="light"
                        text="dark"
                    >
                        {badge}
                    </Badge>
                ))}
            </div>
            <Card.Text className="Matter" style={{ color: textColor, fontSize: "16px" }}>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
);

const Facilities = () => {
    return (

        <div>
            <div className=" container d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 style={{ fontSize: "36px", color: "#003A5D" }} className="fw-bold boldMatter">Facilities</h4>
                    <p className="text-muted Matter " style={{ maxWidth: '400px', fontWeight: 100 }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <div
                style={{
                    background: 'linear-gradient(to top, #173931 0%, #003A5D 100%)',
                    color: 'white',
                    position: "relative",
                    height: "654px",
                    marginTop: "9rem"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-12rem",
                        left: 400,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    {cardData.filter(card => card.position === "top").map(renderCard)}
                </div>

                <div
                    style={{
                        position: "absolute",
                        bottom: "-25rem",
                        right: 0,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    {cardData.filter(card => card.position === "bottom").map(renderCard)}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
