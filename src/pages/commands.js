import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | Ace</title>
        <meta
          name="description"
          content="Commands page | Ace Bot"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Commands of Ace Bot
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Admin
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>a!autorole</kbd> -{" "}
                  <span className="p-color">setup role to be given when a member joins the server</span>
                </li>
                <li>
                  <kbd>a!counter</kbd> -{" "}
                  <span className="p-color">setup counter channel in the guild</span>
                </li>
                <li>
                  <kbd>a!embed</kbd> -{" "}
                  <span className="p-color">send embed message</span>
                </li>
            <li>
                  <kbd>a!flagtranslation</kbd> -{" "}
                  <span className="p-color">configure flag translation in the server</span>
                </li>
            <li>
                  <kbd>a!farewell</kbd> -{" "}
                  <span className="p-color">setup farewell message</span>
                </li>
            <li>
                  <kbd>a!welcome</kbd> -{" "}
                  <span className="p-color">setup welcome message</span>
                </li>
            <li>
                  <kbd>a!maxwarn</kbd> -{" "}
                  <span className="p-color"> set max warnings configuration</span>
                </li>
            <li>
                  <kbd>a!modlog</kbd> -{" "}
                  <span className="p-color">enable or disable moderation logs
</span>
                </li>
            <li>
                  <kbd>a!addrr</kbd> -{" "}
                  <span className="p-color">setup reaction role for the specified message</span>
                </li>
             <li>
                  <kbd>a!removerr</kbd> -{" "}
                  <span className="p-color">emove configured reaction for the specified message</span>
                </li>
             <li>
                  <kbd>a!setprefix</kbd> -{" "}
                  <span className="p-color">sets a new prefix for this server</span>
                </li>
            
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Automod
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>a!anti</kbd> -{" "}
                  <span className="p-color">manage various automod settings for the server
</span>
                </li>
                <li>
                  <kbd>a!autodelete</kbd> -{" "}
                  <span className="p-color">manage the autodelete settings for the server
</span>
                </li>
                <li>
                  <kbd>a!automod</kbd> -{" "}
                  <span className="p-color">various automod configuration
</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Anime
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>a!react</kbd> -{" "}
                  <span className="p-color">anime reactions</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              Economy
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>a!bank</kbd> -{" "}
                  <span className="p-color">access to bank operations</span>
                </li>
                <li>
                  <kbd>a!beg</kbd> -{" "}
                  <span className="p-color">beg from someone</span>
                </li>
                <li>
                  <kbd>a!daily</kbd> -{" "}
                  <span className="p-color">receive a daily bonus</span>
                </li>  
            <li>
                  <kbd>a!gamble</kbd> -{" "}
                  <span className="p-color">try your luck by gambling</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          
          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb8" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb9" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb9">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb10" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb10">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb11" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb11">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb12" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb12">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb13" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb13">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb14" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb14">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb15" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb15">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb16" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb16">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb17" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb17">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb18" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb18">
              Image 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
