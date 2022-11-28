const HeroBg = () => {
  return (
    <>
      <div className="absolute left-4 top-[75%] sm:left-10 sm:top-[60%]  lg:left-20 lg:top-24 opacity-10 lg:opacity-5 text-xs sm:text-sm w-40">
        <q>
          {` “Design doesn't mean that every person [is] gonna like, love it, but
          that's the creativity of [an] eye which creates something different.”`}
        </q>
        <p> – Bijay Chhetri</p>
      </div>
      <div className="absolute hidden sm:block right-20 top-24 lg:right-11 lg:top-40 opacity-10 w-96 text-sm">
        <q>
          To program is to translate between the chaos of the chaos of the human
          life and the line-by-line world of the computer.
        </q>
        <p> - Ellen Ullman</p>
      </div>
      <div className="absolute right-4 top-20 sm:top-40 lg:right-40 lg:top-[45%] opacity-10 text-xs sm:text-sm w-40">
        <q>
          {` “There are three responses to a piece of design - yes, no, and WOW! Wow
        is the one to aim for”`}
        </q>
        <p> - Milton Glaser</p>
      </div>
      <div className="absolute hidden lg:block left-72 bottom-36 opacity-10 text-sm w-44">
        <q>
          Learning to write programs stretches your mind, and helps you think
          better, creates a way of thinking about things that I think is helpful
          in all domains.
        </q>
        <p> - Bill Gates</p>
      </div>
      <div className="absolute hidden sm:block right-2 bottom-8 md:right-2 xl:right-20 md:bottom-32 opacity-10 text-sm">
        <q>
          {
            " If you're already a front-end developer, well, pretend you're also wearing a pirate hat."
          }
        </q>
        <p> - Ethan Marcotte</p>
      </div>
    </>
  );
};

export default HeroBg;
