import axios from "axios";
import fs from "fs";
import path from "path";
import FormData from 'form-data'

axios.defaults.headers.common['referer'] = 'https://admin.n.onein.cn/automation/codeComponent';

axios.interceptors.response.use((res) => {
  return res.data;
});

const baseUrl = "https://admin.n.onein.cn/ns/";

function uploadZip() {
  let params = {};
  let formData = new FormData();
  let cwd = process.cwd();
  formData.append("File", fs.createReadStream(path.join(cwd, "dist.zip")));
  axios.post(
    `${baseUrl}CodeComponent/UploadAndUnzipCodeComponent`,
    formData,
    {
      params,
    }
  ).then(res => {
    console.log('0000', res)
  }).catch(err => {
    console.log(err)
  })
}

uploadZip()