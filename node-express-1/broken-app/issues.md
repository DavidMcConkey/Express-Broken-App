# Broken App Issues

## Issue 1 Dependencies

- Original
  Local dependencies missing express and axios, NO package.json File

- Change

  > Run on Terminal

      npm init -y
      npm i express
      npm i axios

## Issue 2 Old variable Declaration

- Original

      var app = express();

- Change

      let app = express();

## Issue 3 err is not defined

- Original
  catch {
  next(err);
  }
- Change

  catch (err) {
  next(err);
  }

## Issue 4 Missing app initialization for json or urlencoded

- Add

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

## Issue 5 Results was a Array of promises, using that array 2 line of code fix the problem

- Add
  let data = await axios.all(results);
  let out = data.map((r) => ({ name: r.data.name, bio: r.data.bio }));

- Change async was added before the function in order for await axios.all to work
  app.post("/", async function (req, res, next) {
