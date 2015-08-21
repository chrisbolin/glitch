ts=$(date +"%s")
sed s/v=[0-9]*/v=$ts/g index.html > index.html.tmp && mv index.html.tmp index.html
