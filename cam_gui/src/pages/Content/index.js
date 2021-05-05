import {faClipboard} from "@fortawesome/pro-solid-svg-icons";
import { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Content.scss';

import { useQueryCode } from '../../utils/useQueryCode';
import { useFieldsCode } from '../../utils/useFieldsCode';

function Main() {
  const [queryWhereState] = useQueryCode('where');
  const [queryRestrictState] = useQueryCode('restrict');
  const [queryFieldsState] = useFieldsCode('fields');
  const [queryOrderState] = useQueryCode('order');
  const [formStates, setFormStates] = useState();
  const [fieldName, setFieldName] = useState(undefined);
  const [copied, setCopied] = useState(false);

  const queryWhereCode = {
    query: {
      fields: queryFieldsState,
      restrict: queryRestrictState,
      where: queryWhereState,
      order: queryOrderState,
      limit: 10,
      offset: 0
    }
  };

  //const queryCopied = JSON.stringify(queryWhereCode);
  const queryCopied = JSON.stringify(queryWhereCode);
  const notify = () => toast.info('🦄 Daten in Zwischenablage kopiert!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const onCopy = () => {
    setCopied(true);
    notify();
  };

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Open Sans',
            weights: [400, '400i', 600, 700],
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700],
          },
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

      <div>
      </div>
    </>
  );
}

export default Main;
