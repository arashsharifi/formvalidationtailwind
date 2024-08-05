import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen grid place-items-center bg-gray-200">
      <Card
        color="transparent"
        className="bg-white rounded-md p-7"
        shadow={true}
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <br />
        <form
          className="mb-4 w-[600px] grid grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Controller
              name="Username"
              rules={{
                required: "user name is required",
                minLength: { value: 3, message: "mini 3 carecters" },
                maxLength: { value: 12, message: "max 12 careters" },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  size="lg"
                  placeholder="enter name"
                  label="Username"
                  error={Boolean(errors?.Username?.message)}
                />
              )}
            />
            {console.log(errors)}
            {errors?.Username?.message && (
              <span className="text-red-600">{errors?.Username?.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="Email"
              rules={{
                required: "email is required",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "imail is invalid",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  size="lg"
                  placeholder="enter email"
                  label="email"
                  error={Boolean(errors?.Email?.message)}
                />
              )}
            />
            {errors?.Email?.message && (
              <span className="text-red-600">{errors?.Email?.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  size="lg"
                  placeholder="enter pass"
                  label="password"
                />
              )}
            />
          </div>

          <div className="w-72">
            <Controller
              name="domains"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Select Domain">
                  <Option value="designer">Designer</Option>
                  <Option value="dev">Developer</Option>
                  <Option value="tester">Tester</Option>
                  <Option value="others">Others</Option>
                </Select>
              )}
            />
          </div>
          <div>
            <Controller
              name="passwordconfrim"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  size="lg"
                  placeholder="confrim password"
                  label="confrim password"
                />
              )}
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-5">
            <Button variant="outlined" type="reset">
              Reset
            </Button>
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default App;
