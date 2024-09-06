import { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATES } from "../constants"; // Usamos el apartado de certificados
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type CertificateCardProps = {
  index: number;
  certificateName: string;
  image: string;
};

// Certificate Card
const CertificateCard = ({
  index,
  certificateName,
  image,
}: CertificateCardProps) => {
  // Estado para controlar el modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Función para abrir/ cerrar el modal
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full cursor-pointer"
        onClick={toggleModal} // Mostrar el modal cuando se haga clic
      >
        {/* Certificado Imagen */}
        <img
          src={image}
          alt={`certificate-${certificateName}`}
          className="w-full h-[200px] object-cover rounded-lg"
        />

        <div className="mt-4">
          {/* Nombre del Certificado */}
          <p className="text-white font-medium text-[18px] text-center">
            {certificateName}
          </p>
        </div>
      </motion.div>

      {/* Modal para mostrar la imagen en grande */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative bg-black-200 p-5 rounded-lg">
            {/* Botón de cerrar (X) */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={toggleModal} // Cerrar el modal al hacer clic
            >
              &times;
            </button>
            <img
              src={image}
              alt={`large-certificate-${certificateName}`}
              className="w-[500px] h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

// Certificates Section
export const Certificates = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Some of my certificates</p>
            <h2 className={styles.sectionHeadText}>Certificates.</h2>
          </motion.div>
        </div>

        {/* Certificate Cards */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {CERTIFICATES.map((certificate, i) => (
            <CertificateCard
              key={certificate.certificateName}
              index={i}
              {...certificate}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};