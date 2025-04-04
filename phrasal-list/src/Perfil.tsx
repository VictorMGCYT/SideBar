import { Hammer, Languages, Lightbulb, Mail, Phone } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import '@react-pdf-viewer/core/lib/styles/index.css';


function Profile() {

    const pdfUrl = "https://res.cloudinary.com/dbhvyfedz/image/upload/v1743736741/cv_students/mwrfulpphwpsctykp0gz.pdf";

    return(
        <>

            <div className="grid items-center p-4 grid-cols-1 md:grid-cols-[2fr_1fr] gap-4  w-full">
                <div>
                    <h2 className="text-4xl font-bold">
                        Mi Perfil
                    </h2>
                    <p className="text-gray-500">
                        Visualiza y gestiona tu información personal y profesional
                    </p>
                </div>
                <Button 
                    className="bg-amber-500 mr-auto ml-auto w-full md:ml-auto md:w-[50%] md:mr-0 hover:bg-amber-600 hover:cursor-pointer">
                    Editar Perfil
                </Button>
            </div>
            <div className="grid items-start p-4 grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 w-full">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            Información Personal
                        </CardTitle>
                        <CardDescription>{"Víctor Manuel González Cabrera"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-4">
                                <Mail/> {"victormgc@gmail.com"}
                            </li>
                            <li className="flex gap-4">
                                <Phone/> {"+52 418-158-2406"}
                            </li>
                            <li className="flex gap-4">
                                <Hammer/> {"Ing. Sistemas Computacionales"}
                            </li>
                        </ul>
                        
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    <Dialog>
                        <DialogTrigger 
                            className="w-full text-white bg-amber-500 hover:bg-amber-600 hover:text-white" 
                            asChild>
                            <Button variant="outline">Ver CV</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[1025px] sm:w-[90%]">
                            <DialogHeader>
                                <DialogTitle>Curriculum Vitae</DialogTitle>
                            </DialogHeader>
                            <iframe
                                className="max-h-[80vh]"
                                src={pdfUrl}
                                width="100%"  
                                height="600px" 
                                style={{ border: 'none' }}
                                title="PDF Viewer"
                            />
                        </DialogContent>
                        </Dialog>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            Habilidades e Idiomas
                        </CardTitle>
                        <CardDescription>
                            Mi información adicional
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-lg font-medium mb-4">
                            Idiomas
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {/* TODO Hacer un mapeo de los idiomas hablados */}
                            <li className="flex gap-4">
                                <Languages/> {"Español"}
                            </li>
                            <li className="flex gap-4">
                                <Languages/> {"Inglés"}
                            </li>
                            <li className="flex gap-4">
                                <Languages/> {"portugues"}
                            </li>
                        </ul>
                        <h3 className="text-lg font-medium mt-4 mb-4">
                            Habilidades
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {/* TODO Hacer un mapeo de las habilidades */}
                            <li className="flex gap-4">
                                <Lightbulb/> {"Trabajo en equipo"}
                            </li>
                            <li className="flex gap-4">
                                <Lightbulb/> {"Buena Comunicación"}
                            </li>
                            <li className="flex gap-4">
                                <Lightbulb/> {"Responsable"}
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        
                    </CardFooter>
                </Card>
            </div>

        </>
    )
}


export default Profile;