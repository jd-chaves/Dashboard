import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart.js";
import Rebase from "re-base";
import firebase from "firebase";
import { Bar, Line, Pie } from "react-chartjs-2";
import {HorizontalBar} from 'react-chartjs-2';
import {Radar} from 'react-chartjs-2';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      medidas: [],
      diagnosticos: [],
      users: [],
      time: [],
      medidasData: [],
      timeData: []
    };
    this.getWaitingData = this.getWaitingData.bind(this);
  }
  componentDidMount() {
    this.unsubscribeCol = this.colRef.onSnapshot(this.onColUpdate);
    this.unsubscribeW = this.waitingRef.onSnapshot(this.onWUpdate);
    this.unsubscribeM = this.medidasRef.onSnapshot(this.onMUpdate);
    this.unsubscribeD = this.diagnosticosRef.onSnapshot(this.onDUpdate);
  }




  onMUpdate = snapshot => {
    const docs = snapshot.docs.map(docSnapshot => ({
      data: docSnapshot.data()
    }));
    this.setState({
      medidas: docs
    });
  };
  onWUpdate = snapshot => {
    const docs = snapshot.docs.map(docSnapshot => ({
      data: docSnapshot.data()
    }));
    this.setState({
      time: docs
    });
  };

  onDUpdate = (snapshot) => {
    const docs = snapshot.docs.map((docSnapshot) => ({
      data: docSnapshot.data()
    }));
    this.setState({
      diagnosticos: docs,
    });
  }
  onColUpdate = snapshot => {
    const docs = snapshot.docs.map(docSnapshot => ({
      data: docSnapshot.data()
    }));
    this.setState({
      users: docs
    });
  };
  componentWillMount() {
    const config = {
    apiKey: Meteor.settings.public.stripe.api_key,
    authDomain: Meteor.settings.public.stripe.authDomain,
    databaseURL: Meteor.settings.public.stripe.databaseURL,
    projectId: Meteor.settings.public.stripe.projectId,
    storageBucket: Meteor.settings.public.stripe.storageBucket,
    messagingSenderId: Meteor.settings.public.stripe.messagingSenderId
    };

    firebase.initializeApp(config);
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    this.colRef = firebase.firestore().collection("users");
    this.waitingRef = firebase.firestore().collection("waiting_time");
    this.medidasRef = firebase.firestore().collection("medidas");
    this.diagnosticosRef = firebase.firestore().collection("diagnosticos");
  }



getMeasuresData()
{
    let medidas = this.state.medidas;
    let users = this.state.users;
    let mon = [];
    let mar = [];
    let mie = [];
    let jue = [];
    let vie = [];
    let sab = [];
    let dom = [];

    let mon2 = [];
    let mar2 = [];
    let mie2 = [];
    let jue2 = [];
    let vie2 = [];
    let sab2 = [];
    let dom2 = [];


    for(var i = 0; i< medidas.length;i++)
    {
      var d = new Date(medidas[i].data.time_sort).getDay();

      if(medidas[i].data.gender==="Male")
      {
          if(d === 0)
          {
              dom.push(medidas[i].data.avg);
          }
          else if(d === 1)
          {
              mon.push(medidas[i].data.avg);
          }
          else if(d === 2)
          {
              mar.push(medidas[i].data.avg);
          }
          else if(d === 3)
          {
              mie.push(medidas[i].data.avg);
          }
          else if(d === 4)
          {
              jue.push(medidas[i].data.avg);
          }
          else if(d === 5)
          {
              vie.push(medidas[i].data.avg);
          }
          else if(d === 6)
          {
              sab.push(medidas[i].data.avg);
          }
      }
      else if(medidas[i].data.gender==="Female")
      {
          if(d === 0)
          {
              dom2.push(medidas[i].data.avg);
          }
          else if(d === 1)
          {
              mon2.push(medidas[i].data.avg);
          }
          else if(d === 2)
          {
              mar2.push(medidas[i].data.avg);
          }
          else if(d === 3)
          {
              mie2.push(medidas[i].data.avg);
          }
          else if(d === 4)
          {
              jue2.push(medidas[i].data.avg);
          }
          else if(d === 5)
          {
              vie2.push(medidas[i].data.avg);
          }
          else if(d === 6)
          {
              sab2.push(medidas[i].data.avg);
          }
      }
    }


      let data1 = [];
      let data2 = [];

      var sum = 0;
      for(var i = 0; i<mon.length;i++)
      {
          sum += mon[i];
      }

      data1.push(sum/mon.length);

      sum=0;

      for(var i = 0; i<mar.length;i++)
      {
          sum += mar[i];
      }

      data1.push(sum/mar.length);

      sum=0;

      for(var i = 0; i<mie.length;i++)
      {
          sum += mie[i];
      }

      data1.push(sum/mie.length);

      sum=0;

      for(var i = 0; i<jue.length;i++)
      {
          sum += jue[i];
      }

      data1.push(sum/jue.length);

      sum=0;

      for(var i = 0; i<vie.length;i++)
      {
          sum += vie[i];
      }

      data1.push(sum/vie.length);

      sum=0;

      for(var i = 0; i<sab.length;i++)
      {
          sum += sab[i];
      }

      data1.push(sum/sab.length);

      sum=0;

      for(var i = 0; i<dom.length;i++)
      {
          sum += dom[i];
      }

      data1.push(sum/dom.length);

      sum=0;

      for(var i = 0; i<mon2.length;i++)
      {
          sum += mon2[i];
      }

      data2.push(sum/mon2.length);

      sum=0;

      for(var i = 0; i<mar2.length;i++)
      {
          sum += mar2[i];
      }

      data2.push(sum/mar2.length);

      sum=0;

      for(var i = 0; i<mie2.length;i++)
      {
          sum += mie2[i];
      }

      data2.push(sum/mie2.length);

      sum=0;

      for(var i = 0; i<jue2.length;i++)
      {
          sum += jue2[i];
      }

      data2.push(sum/jue2.length);

      sum=0;

      for(var i = 0; i<vie2.length;i++)
      {
          sum += vie2[i];
      }

      data2.push(sum/vie2.length);

      sum=0;

      for(var i = 0; i<sab2.length;i++)
      {
          sum += sab2[i];
      }

      data2.push(sum/sab2.length);

      sum=0;

      for(var i = 0; i<dom2.length;i++)
      {
          sum += dom2[i];
      }

      data2.push(sum/dom2.length);

      sum=0;

  const dataRad = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
    datasets: [
    {
      label: 'Male',
      backgroundColor: 'rgba(102, 204, 255)',
      borderColor: 'rgba(0, 51, 153)',
      pointBackgroundColor: 'rgba(102, 204, 255)',
      pointBorderColor: 'rgba(0, 51, 153)',
      pointHoverBackgroundColor: 'rgba(0, 51, 153)',
      pointHoverBorderColor: 'rgba(0, 51, 153)',
      data: data1
    },
    {
      label: 'Female',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: data2
}]
}

return (
      <div>
        <h2>Heartbeat Average</h2>
        <Radar data={dataRad} />
      </div>
);




}
getSymptomsData(){





    let diagnosticos = this.state.diagnosticos;
    let names = [];
    let datos = [];
    let names2 = [];
    let datos2 = [];
    let cantGraves = 0;
    let cantNograves = 0;
    var mapa = {};
    var mapa2 = {};

    for(var i = 0;i<diagnosticos.length;i++)
    {
      if(diagnosticos[i].data.grave)
        cantGraves++;
      else
        cantNograves++;
      for(var j=0; j<diagnosticos[i].data.symptoms.length;j++){
        var s = diagnosticos[i].data.symptoms[j];
        if(s in mapa)
        {
          let temp = mapa[s].cant;
          mapa[s].cant = temp+1;
        }
        else
        {
          mapa[s] = {cant: 1};
        }
      }
    }

      for(var i = 0;i<diagnosticos.length;i++)
    {

      for(var j=0; j<diagnosticos[i].data.specialists.length;j++){
        var s = diagnosticos[i].data.specialists[j];
        if(s in mapa2)
        {
          let temp = mapa2[s].cant;
          mapa2[s].cant = temp+1;
        }
        else
        {
          mapa2[s] = {cant: 1};
        }
      }

    }


    for(var x in mapa)
    {
      names.push(x);
      datos.push(mapa[x].cant);
    }
    for(var x in mapa2)
    {
      names2.push(x);
      datos2.push(mapa2[x].cant);
    }

const gravesData = {
      labels: ["Severe", "Not Severe"],
      datasets: [
        {
          data: [cantGraves, cantNograves],
          backgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };
const data = {
  labels: names,
  datasets: [
    {
      label: 'Symptoms',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: datos
    }
  ]
};


const data2 = {
  labels: names2,
  datasets: [
    {
      label: 'Specialists',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: datos2
    }
  ]
};
return (
      <div>
      <div className="chart">
        <br />
        <br />
        <h2>Frequent Symptoms From Triage</h2>
        <HorizontalBar data={data} />
        <br />
        <br />
        <br />
        </div>
        <div className="chart">
        <h2>Severity of Symptoms</h2>
        <Pie
            data={gravesData}
            height={175}
            options={{
              maintainAspectRatio: false
            }}
          />
        <br />
        </div>
        <div className="chart">
        <h2>Specialists for Symptoms</h2>
        <HorizontalBar
            data={data2}
            height={175}
           />
        <br />
        </div>
      </div>
    );
}

  getWaitingData() {
    let time = this.state.time;
    let hospitals = [];
    let prom = [];
    let times = [];
    let min = [];
    let max = [];
    let prome = [];
    let mine = [];
    let maxe = [];
    let fechas=[];
    let dates=[];
    let veces=[];
    let users = this.state.users;
    let man = [];
    let woman = [];
    //0 H, 1 M
    for (var i = 0; i < time.length; i++) {
      var date = new Date(time[i].data.date.seconds*1000);
      let split=date.toString().split(" ");
      let fecha = split[0];
      dates.push(fecha);
      let h = time[i].data.hospital;
      var j;
      var encontro = true;
      if (hospitals.length == 0) {
        hospitals.push(h);
        let t = time[i].data.erTime.split(":");
        let tiempo = parseInt(t[1]) + 60 * parseInt(t[0]);
        prom.push(tiempo);
        times.push(1);
        min.push(tiempo);
        max.push(tiempo);
        let ta = time[i].data.internistTime.split(":");
        let tiemp = parseInt(ta[1]) + 60 * parseInt(ta[0]);
        prome.push(tiemp);
        mine.push(tiemp);
        maxe.push(tiemp);
        /*
        1. Ver el genero del usuario
        */
        let uId=time[i].data.user_id;
        let user;
        let end = false;
        for(var m = 0; m<users.length && !end;m++){
          let us = users[m].data;
          if(uId==us.uid){
            if(us.gender=="Male"){
              man.push(1);
              woman.push(0);
                          }
            else{
              man.push(0);
              woman.push(1);
            }
            end =true;
          }
        }
      } else {
        for (j = 0; j < hospitals.length && encontro; j++) {
          if (hospitals[j] == h) {
            encontro = false;
            let t = time[i].data.erTime.split(":");
            let tiempo = parseInt(t[1]) + 60 * parseInt(t[0]);
            prom[j] = prom[j] + tiempo;
            times[j] = times[j] + 1;
            if (min[j] > tiempo) {
              min[j] = tiempo;
            }
            if (max[j] < tiempo) {
              max[j] = tiempo;
            }
            let ta = time[i].data.internistTime.split(":");
            let tiemp = parseInt(ta[1]) + 60 * parseInt(ta[0]);
            prome[j] = prome[j] + tiemp;
            if (mine[j] > tiemp) {
              mine[j] = tiemp;
            }
            if (maxe[j] < tiemp) {
              maxe[j] = tiemp;
            }
            /*
            1. Ver el genero del usuario
            */
            let uId=time[i].data.user_id;
            let user;
            let end = false;
            for(var m = 0; m<users.length && !end;m++){
              let us = users[m].data;
              if(uId==us.uid){
                if(us.gender=="Male"){
                  man[j]=man[j]+1;

                }
                else{
                  woman[j]=woman[j]+1;

                }
                end =true;
              }
            }
          } else if (j == hospitals.length - 1 && hospitals[j] != h) {
            hospitals.push(h);
            let t = time[i].data.erTime.split(":");
            let tiempo = parseInt(t[1]) + 60 * parseInt(t[0]);
            prom.push(tiempo);
            times.push(1);
            min.push(tiempo);
            max.push(tiempo);

            let ta = time[i].data.internistTime.split(":");
            let tiemp = parseInt(ta[1]) + 60 * parseInt(ta[0]);
            prome.push(tiemp);
            mine.push(tiemp);
            maxe.push(tiemp);
            /*
            1. Ver el genero del usuario
            */
            let uId=time[i].data.user_id;
            let end = false;
            for(var m = 0; m<users.length && !end;m++){
              let us = users[m].data;
              if(uId==us.uid){
                if(us.gender=="Male"){
                  man.push(1);
                  woman.push(0);

                }
                else{
                  man.push(0);
                  woman.push(1);

                }
                end =true;
              }
            }
          }
        }
      }
    }
    for(var i = 0; i < dates.length; i++){
      let date = dates[i];
      if(fechas.length==0){
        fechas.push(date);
        veces.push(1);
      }
      else {
        let encontro = true;
        for (j = 0; j < fechas.length && encontro; j++) {
          if (fechas[j] == date) {
            encontro = false;
            veces[j]=veces[j]+1;
          } else if (j == fechas.length - 1 && fechas[j] != date) {
            fechas.push(date);
            veces.push(1);
          }
        }
      }
    }
    for (var i = 0; i < prom.length; i++) {
      prom[i] = prom[i] / times[i];
    }
    for (var i = 0; i < prome.length; i++) {
      prome[i] = prome[i] / times[i];
    }
    let timeD = {
      labels: hospitals,
      datasets: [
        {
          label: "Average ER Waiting Time",
          backgroundColor: "rgba(0, 153, 255)",
          borderColor: "rgba(0, 51, 153)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 255, 0)",
          hoverBorderColor: "rgba(0, 102, 0)",
          data: prom
        },
        {
          label: "Minimum ER Waiting Time",
          backgroundColor: "rgba(0, 13, 55)",
          borderColor: "rgba(0, 51, 53)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 55, 10)",
          hoverBorderColor: "rgba(0, 12, 20)",
          data: min
        },
        {
          label: "Maximum ER Waiting Time",
          backgroundColor: "rgba(0, 15, 25)",
          borderColor: "rgba(0, 71, 15)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 25, 50)",
          hoverBorderColor: "rgba(0, 20, 80)",
          data: max
        }
      ]
    };
    let timeInternist = {
      labels: hospitals,
      datasets: [
        {
          label: "Average ER Waiting Time",
          backgroundColor: "rgba(0, 153, 255)",
          borderColor: "rgba(0, 51, 153)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 255, 0)",
          hoverBorderColor: "rgba(0, 102, 0)",
          data: prome
        },
        {
          label: "Minimum ER Waiting Time",
          backgroundColor: "rgba(0, 13, 55)",
          borderColor: "rgba(0, 51, 53)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 55, 10)",
          hoverBorderColor: "rgba(0, 12, 20)",
          data: mine
        },
        {
          label: "Maximum ER Waiting Time",
          backgroundColor: "rgba(0, 15, 25)",
          borderColor: "rgba(0, 71, 15)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 25, 50)",
          hoverBorderColor: "rgba(0, 20, 80)",
          data: maxe
        }
      ]
    };
    let generos = {
      labels: hospitals,
      datasets: [
        {
          label: "Woman",
          backgroundColor: "rgba(0, 153, 255)",
          borderColor: "rgba(0, 51, 153)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 255, 0)",
          hoverBorderColor: "rgba(0, 102, 0)",
          data: woman
        },
        {
          label: "Man",
          backgroundColor: "rgba(0, 13, 55)",
          borderColor: "rgba(0, 51, 53)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 55, 10)",
          hoverBorderColor: "rgba(0, 12, 20)",
          data: man
        }]
    };
    let visitas = {
      labels: fechas,
      datasets: [
        {
          label: "Visits per day",
          backgroundColor: "rgba(0, 153, 255)",
          borderColor: "rgba(0, 51, 153)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 255, 0)",
          hoverBorderColor: "rgba(0, 102, 0)",
          data: veces
        }]
      };
    return (
      <div>
        <br />
        <br />
        <h2>Emergency Room Waiting time (triage)</h2>
        <Chart chartData={timeD} />
        <br />
        <h2>Waiting time for Internist Attention</h2>
        <Chart chartData={timeInternist} />
        <br />
        <h2>Visits per day (All hospitals)</h2>
        <Chart chartData={visitas} />
        <br />
        <h2>Visits per gender</h2>
        <Chart chartData={generos} />
      </div>
    );
  }

getUserM(){
  let users = this.state.users;
  let por = [];
  let times = [];
  for(var i=0; i<users.length;i++){
    let user = users[i].data;
    if(user.weight && user.height){
      let masa = user.weight/((user.height/100)*(user.height/100));
      if(por.length==0){
        por.push(masa);
        times.push(1);
        continue;
      }
      else{
        let encontro = false;
        for(var j = 0; j<por.length && !encontro;j++){
          if(por[j]==masa){
            times[j]=times[j]+1;
            encontro = true;
          }
          else if(j==por.length-1 && por[j]!=masa){
            por.push(masa);
            times.push(1);
            encontro = true;
          }
        }
      }

    }
  }
  let pieT=[0,0,0,0,0];
  let lab = ["0-18.5","18.5-24.9","25-29.9","30-39.9","40 or more"];
  for(var i = 0;i<por.length;i++){
    let x = por[i];
    if(x>=40){
      pieT[4]++;
    }
    else if(x>=30 && x<40){
      pieT[3]++;
    }
    else if(x>=25 && x<30){
      pieT[2]++;
    }
    else if(x>18.5 && x<25){
      pieT[1]++;
    }
    else {
      pieT[0]++;
    }
  }

  const massss = {
    labels: lab,
    datasets: [
      {
        data: pieT,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#EE82EE", "#020326"]
      }
    ]
  };
  return(
    <div>
      <br />
      <br />
      <h2>Body Mass</h2>
      <div className="chart">
        <Pie
          data={massss}
          height={175}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      </div>
  );
}

  getAgeData() {


    const users = this.state.users;
    let currentUser = null;
    let birthDay = null;
    let age = null;
    let children = 0;
    let adolescents = 0;
    let adults = 0;
    let seniors = 0;
    let males = 0;
    let females = 0;

    var mapa = {};
    var names = [];
    var datos = [];
    var mapa2 = {};
    var names2 = [];
    var datos2= [];


for(var i = 0;i<users.length;i++)
    {
      var s = users[i].data.blood_type;
      if(users[i].data.blood_type)
      {
        if(s in mapa)
        {
          let temp = mapa[s].cant;
          mapa[s].cant = temp+1;
        }
        else
        {
          mapa[s] = {cant: 1};
        }
     }
   }



    for(var x in mapa)
    {
      names.push(x);
      datos.push(mapa[x].cant);
    }


 for(var i = 0;i<users.length;i++)
    {
      var s = users[i].data.eps;
      if(users[i].data.eps)
      {
        if(s in mapa2)
        {
          let temp = mapa2[s].cant;
          mapa2[s].cant = temp+1;
        }
        else
        {
          mapa2[s] = {cant: 1};
        }
     }
   }



    for(var x in mapa2)
    {
      names2.push(x);
      datos2.push(mapa2[x].cant);
    }


    for (let i = 0; i < users.length; i++) {
      if (!users[i].data) {
        continue;
      }
      currentUser = users[i].data;

      if (!currentUser.birth) {
        continue;
      }
      if (currentUser.gender) {
        if (currentUser.gender == "Male") {
          males++;
        } else if (currentUser.gender == "Female") {
          females++;
        }
      }
      birthDay = this.birthSecondstoDate(currentUser.birth.seconds);
      age = this.calculateAge(birthDay);

      if (age >= 0 && age <= 14) {
        children++;
      }
      if (age >= 15 && age <= 24) {
        adolescents++;
      }
      if (age >= 25 && age <= 64) {
        adults++;
      }
      if (age >= 65) {
        seniors++;
      }
    }

    const ageData = {
      labels: ["Children", "Adolescents", "Adults", "Seniors"],
      datasets: [
        {
          data: [children, adolescents, adults, seniors],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#EE82EE"]
        }
      ]
    };

    const genderData = {
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [males, females],
          backgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };

    const bloodData = {
      labels: names,
      datasets: [
        {
          data: datos,
          backgroundColor: ["#FF6384", "#36A2EB", "#F15854", "#DECF3F", "#60BD68", "#F17CB0", "#4D4D4D"]
        }
      ]
    };

    const epsData = {
      labels: names2,
      datasets: [
        {
          data: datos2,
          backgroundColor: ["#FF6384", "#36A2EB", "#F15854", "#DECF3F", "#60BD68", "#F17CB0", "#4D4D4D"]
        }
      ]
    };

    return (
      <div>
        <br />
        <br />
        <h2>Age distribution in Emergency Room (All hospitals)</h2>
        <div className="chart">
          <Pie
            data={ageData}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <br />
        <br />
        <h2>Male vs Female Ratio in Emergency Room (All hospitals)</h2>
        <div className="chart">
          <Pie
            data={genderData}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <h2>User's blood type </h2>
        <div className="chart">
          <Pie
            data={bloodData}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
        <h2>User's eps </h2>
        <div className="chart">
          <Pie
            data={epsData}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    );
  }

  birthSecondstoDate(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  calculateAge(birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    let time = this.state.time;
    if (time.length > 0) {
      let timeData = this.state.timeData;
      return (
        <div className="container">
          <header>
            <h1>Health Buddy Dashboard</h1>
          </header>
          {this.getWaitingData()}
          {this.getAgeData()}
          {this.getSymptomsData()}
          {this.getMeasuresData()}
          {this.getUserM()}
        </div>
      );
    } else {
      return (
        <div className="container">
          <header>
            <h1>Health Buddy Dashboard</h1>
          </header>
          <h1>...Loading...</h1>
        </div>
      );
    }
  }
}
