import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";


const TerminosYCondiciones = () => {
  return (
    
       <>
      <Head>
        <title>Términos y Condiciones | DCF Inversiones</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Términos y condiciones y política de privacidad de DCF Inversiones."
        />
      </Head>
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>

      <Box
        sx={{
          background: 'linear-gradient(to right, rgba(59, 121, 149, 1), rgba(43, 101, 128, 1), rgba(34, 82, 108, 1))',
         paddingTop:"150px",
         paddingBottom:"50px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "#fff", fontWeight: "bold", fontSize:{
            sm:"60px", xs:"28px"
          } }}
        >
          Términos y Condiciones
        </Typography>
      </Box>


      <Container sx={{ py: 8, maxWidth: "md" }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{color:"#000"}}>
          POLÍTICA DE PRIVACIDAD
        </Typography>

        <Typography sx={{color:"#000"}}>
          El presente Política de Privacidad establece los términos en que DCF
          Inversiones usa y protege la información que es proporcionada por sus
          usuarios al momento de utilizar su sitio web. Esta compañía está
          comprometida con la seguridad de los datos de sus usuarios. Cuando le
          pedimos llenar los campos de información personal con la cual usted
          pueda ser identificado, lo hacemos asegurando que sólo se empleará de
          acuerdo con los términos de este documento. Sin embargo esta Política
          de Privacidad puede cambiar con el tiempo o ser actualizada por lo que
          le recomendamos y enfatizamos revisar continuamente esta página para
          asegurarse que está de acuerdo con dichos cambios.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"#000"}}>
          Información que es recogida
        </Typography>
        <Typography sx={{color:"#000"}}>
          Nuestro sitio web podrá recoger información personal por ejemplo:
          Nombre, información de contacto como su dirección de correo
          electrónica e información demográfica. Así mismo cuando sea necesario
          podrá ser requerida información específica para procesar algún pedido
          o realizar una entrega o facturación.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"#000"}}>
          Uso de la información recogida
        </Typography>
        <Typography sx={{color:"#000"}}>
          Nuestro sitio web emplea la información con el fin de proporcionar el
          mejor servicio posible, particularmente para mantener un registro de
          usuarios, de pedidos en caso que aplique, y mejorar nuestros productos
          y servicios. Es posible que sean enviados correos electrónicos
          periódicamente a través de nuestro sitio con ofertas especiales,
          nuevos productos y otra información publicitaria que consideremos
          relevante para usted o que pueda brindarle algún beneficio, estos
          correos electrónicos serán enviados a la dirección que usted
          proporcione y podrán ser cancelados en cualquier momento.
        </Typography>
        <Typography sx={{color:"#000"}}>
          DCF Inversiones está altamente comprometido para cumplir con el
          compromiso de mantener su información segura. Usamos los sistemas más
          avanzados y los actualizamos constantemente para asegurarnos que no
          exista ningún acceso no autorizado.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"#000"}}>
          Cookies
        </Typography>
        <Typography sx={{color:"#000"}}>
          Una cookie se refiere a un fichero que es enviado con la finalidad de
          solicitar permiso para almacenarse en su ordenador, al aceptar dicho
          fichero se crea y la cookie sirve entonces para tener información
          respecto al tráfico web, y también facilita las futuras visitas a una
          web recurrente. Otra función que tienen las cookies es que con ellas
          las web pueden reconocerte individualmente y por tanto brindarte el
          mejor servicio personalizado de su web.
        </Typography>
        <Typography sx={{color:"#000"}}>
          Nuestro sitio web emplea las cookies para poder identificar las
          páginas que son visitadas y su frecuencia. Esta información es empleada
          únicamente para análisis estadístico y después la información se
          elimina de forma permanente. Usted puede eliminar las cookies en
          cualquier momento desde su ordenador. Sin embargo las cookies ayudan a
          proporcionar un mejor servicio de los sitios web, estás no dan acceso
          a información de su ordenador ni de usted, a menos de que usted así lo
          quiera y la proporcione directamente. Usted puede aceptar o negar el
          uso de cookies, sin embargo la mayoría de navegadores aceptan cookies
          automáticamente pues sirve para tener un mejor servicio web. También
          usted puede cambiar la configuración de su ordenador para declinar las
          cookies. Si se declinan es posible que no pueda utilizar algunos de
          nuestros servicios.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"#000"}}>
          Enlaces a Terceros
        </Typography>
        <Typography sx={{color:"#000"}}>
          Este sitio web pudiera contener enlaces a otros sitios que pudieran
          ser de su interés. Una vez que usted dé clic en estos enlaces y
          abandone nuestra página, ya no tenemos control sobre al sitio al que
          es redirigido y por lo tanto no somos responsables de los términos o
          privacidad ni de la protección de sus datos en esos otros sitios
          terceros. Dichos sitios están sujetos a sus propias políticas de
          privacidad por lo cual es recomendable que los consulte para confirmar
          que usted está de acuerdo con estas.
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color:"#000"}}>
          Control de su información personal
        </Typography>
        <Typography sx={{color:"#000"}}>
          En cualquier momento usted puede restringir la recopilación o el uso
          de la información personal que es proporcionada a nuestro sitio web.
          Cada vez que se le solicite rellenar un formulario, como el de alta de
          usuario, puede marcar o desmarcar la opción de recibir información por
          correo electrónico. En caso de que haya marcado la opción de recibir
          nuestro boletín o publicidad usted puede cancelarla en cualquier
          momento.
        </Typography>
        <Typography sx={{color:"#000"}}>
          Esta compañía no venderá, cederá ni distribuirá la información
          personal que es recopilada sin su consentimiento, salvo que sea
          requerido por un juez con un orden judicial. DCF Inversiones se
          reserva el derecho de cambiar los términos de la presente Política de
          Privacidad en cualquier momento.
        </Typography>
      </Container>
    </Box>
    </>
  );
};

export default TerminosYCondiciones;
