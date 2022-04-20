import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Row, Form, Col, Stack, Button} from 'react-bootstrap';


const AjoutAuteur = function () {
    // déclarations
        const navigate = useNavigate()

    // useState
        const [validated, setValidated] = useState(false);
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [date_naissance, setDate_naissance] = useState("")

    // useEffect

    // #region fonctions
        const postAuteur =function(e) {
            fetch("http://localhost:3000/auteur", {
                method: "POST",
                body: JSON.stringify({
                    nom: nom,
                    prenom: prenom,
                    date_naissance: date_naissance
                })
            })
                .then(() => {
                    console.log("ajout comfirmer !")
                    navigate("/")
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.currentTarget;
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                }
                else {
                    postAuteur()
                }
            setValidated(true);
        };
    //#endregion

    return(
        <div className='Home'>
            <p className='titre'>ajouter un Auteur</p>
            <div className='contour-form'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} lg controlId="validationCustom01">
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={event => setNom(event.target.value)}
                    />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} lg controlId="validationCustom02">
                    <Form.Label>Prénom :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Prenom"
                        value={prenom}
                        onChange={event => setPrenom(event.target.value)}
                    />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} lg controlId="validationCustom03">
                    <Form.Label>date de naissance :</Form.Label>
                    <Form.Control
                        required
                        type="Date"
                        value={date_naissance}
                        onChange={event => setDate_naissance(event.target.value)}
                    />
                    </Form.Group>
                </Row>
                <Row className='m-auto'>
                <Stack direction="horizontal" gap={1}>
                    <div>
                    <Form.Group className="m-auto">
                        <Form.Check
                        required
                        label="je suis d'accord"
                        />
                    </Form.Group>
                    </div>
                    <div className="ms-auto">
                    <Button type="submit">Confirmer</Button>
                    </div>
                </Stack>
                </Row>
            </Form>
        </div>
        </div>
        
    )
    
}


export default AjoutAuteur