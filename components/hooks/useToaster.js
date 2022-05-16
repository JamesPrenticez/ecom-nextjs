import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setToastList, deleteToastItem } from "../../redux/toaster/actions"

//const toastList = useSelector((state) => state.toastList);

const createToast = (type, message) => {
  // useDispatch(() => setToastList({
  //   id: Date.now(),
  //   type,
  //   message,
  // }))

  return "id"
}

const toast = (message) => createToast('blank')("message")

toast.error = createToast('error');
toast.success = createToast('success');
toast.loading = createToast('loading');
toast.standard = createToast('standard');

export { toast }