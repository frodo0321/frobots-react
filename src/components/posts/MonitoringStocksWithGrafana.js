import React from "react";

export const title = "Monitoring Stocks With Grafana";
export const date = new Date("2016-03-01 23:06:29");
export const published = true;
module.exports.public = true;

export const preview = (
    <div>
        <p>
            This is a post showing how to use the graph builder grafana and a python script to monitor stocks.

            First things first, download and install <a href="http://grafana.org/download/">grafana</a> and <a href="https://influxdata.com/downloads/">influxdb</a>.
        </p>
    </div>
);


class ComputerVisionSecuritySystem extends React.Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        console.log("PROPS", this.props);

        return (
            <div className="post-content">

                {preview}

                <p>
                    You can check to see if they installed correctly and are running by going to localhost:8083 and localhost:3000 in your browser for influxdb and grafana respectively. 
                </p>


                {/*<!----- INFLUX SETUP ----->*/}
                <p>
                    Go to the influxdb admin page (localhost:8083).  Inside the text box, type "CREATE DATABASE "stocks"" and hit enter.  You should see a green box with "Success" in it.
                </p>

                {/*<!----- GRAFANA SETUP ----->*/}
                <p>
                    Next, go to the grafana page (localhost:3000) and log in using "admin" for both username and password, then select "Database Sources" then "Add new"
                </p>

                <image src="http://i.imgur.com/QAlcICe.png" />

                <p>
                    Now, fill out the information as follows:
                </p>

                <image src="http://i.imgur.com/KYzh9bX.png" />

                <p>
                    (the password is "root")
                </p>
                <p>
                    Click "Test Connection" to verify it works then click "Save" and you should be ready to go.
                </p>


                {/*<!----- PYTHON SETUP ----->*/}

                <p>
                    Now, make a python script and put the following in:
                </p>

                <pre className="code">
                    {`import json
from googlefinance import getQuotes
import requests
from time import sleep

class Main():
    def __init__(self, db="stocks", stocks_file="stocks.json"):
        self.stocks=None
        self.db=db
        self.load_stocks(stocks_file)
    def write_to_db(self, measurement, tags, values):
        tag_string=["".join(["{}={}".format(k,v) for k,v in t.iteritems()]) for t in tags]
        data_string="\n".join(["{},{} value={}".format(measurement, tag_string[i], values[i]) for i in range(len(values))])
        requests.post("http://localhost:8086/write?db={}".format(self.db), data_string)
    def get_stock_prices(self, stocks):
        quotes_json=getQuotes(stocks)
        quotes={q["StockSymbol"]:q["LastTradePrice"] for q in quotes_json}
        return quotes
    def load_stocks(self, stocks_file):
        with open(stocks_file) as f:
        data=json.load(f)
        self.stocks=data['stocks']
    def run(self, interval=10):
        while 1:
            try:
                sleep(interval)
                stock_prices=self.get_stock_prices(self.stocks)
                self.write_to_db("stock_value", [{"symbol":k} for k in stock_prices.keys()], stock_prices.values())
            except KeyboardInterrupt:
                quit()
            except:
                pass

if __name__=="__main__":
    m=Main()
    m.run()`}
                </pre>

                <p>
                    and create a json file called "stocks.json" and put this in it:
                </p>

                <pre className="code">
                    {`{"stocks": ["SUNE", "AAPL", "NFLX"]}`}
                </pre>

                <p>
                    The python script uses a module called googlefinance ("$ sudo pip install googlefinance" if not installed) to read the stocks' values listed in the "stocks.json" file and writes the data to influxdb using it's REST api.
                </p>

                <p>
                    Run the python script, go back to influxdb's admin page (localhost:8083), click on the dropdown menu on the top-right of the page (It should say "Database: _internal") and select the "stocks" database.  Then run the query "select * from stock_value" and you should see some stock values listed.
                </p>

                <image src="http://i.imgur.com/dZciYZs.png" />

                <p>
                    Next, go back to grafana, create a new dashboard
                </p>

                <image src="http://i.imgur.com/AUJvGpf.png" />

                <p>
                    create a new graph
                </p>

                <image src="http://i.imgur.com/WDwWW9T.png" />

                <p>
                    select the Metrics tab and fill it out as follows
                </p>

                <image src="http://i.imgur.com/kvwZULK.png" />

                <p>
                    and you should see data points plotted.
                </p>

                <p>
                    Now, you are able to use grafana's powerful dashboard interface to plot stocks the way you want.
                </p>

                <image src="http://i.imgur.com/So5yoCt.png" />



            </div>
       );
    }
}

export const component = ComputerVisionSecuritySystem;
export default ComputerVisionSecuritySystem;

