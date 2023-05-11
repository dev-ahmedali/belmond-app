"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import { useMemo, useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGE = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const [steps, setSteps] = useState(STEPS.CATEGORY);
  const rentModal = useRentModal();

  const onBack = () => {
    setSteps((value) => value - 1)
  }

  const onNext = () => {
    setSteps((value) => value + 1)
  }
  
  const actionLabel = useMemo(() => {
    if(steps === STEPS.PRICE) {
        return 'Create'
    }
    return 'Next'
  }, [steps])

  const secondaryActionLabel = useMemo(() => {
    if(steps === STEPS.CATEGORY){
        return undefined
    }
    return 'Back'
  }, [steps])
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction = {steps === STEPS.CATEGORY ? undefined : onBack}
      title="Belmond your home"
    />
  );
};

export default RentModal;
