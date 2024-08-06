import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    unregister,
    reset
  } = useForm({
    mode:"onTouched"
  });
  const domain = watch("Domains");
  useEffect(()=>{
    if(domain !=='others'){
      unregister('domainname')
    }
  },[domain,unregister])
  
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen grid place-items-center bg-gray-200">
        <p>
          ساخت  المنت با متریال تلویند  هندل کردن ارور هندلینگ ریست ویزیبل کردن المنت مود انتاچت آنرجیستر کردن المنت هایی که نمی خوای بقرستی 
        </p>
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
              {errors?.Username?.message && (
                <span className="text-red-600">
                  {errors?.Username?.message}
                </span>
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

            <div className="w-72">
              <Controller
                name="Domains"
                rules={{
                  required: "Select Domain is required",
                }}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Select Domain"
                    error={Boolean(errors?.Domains?.message)}
                  >
                    <Option value="designer">Designer</Option>
                    <Option value="dev">Developer</Option>
                    <Option value="tester">Tester</Option>
                    <Option value="others">Others</Option>
                  </Select>
                )}
              />
              {errors?.Domains?.message && (
                <span className="text-red-600">{errors?.Domains?.message}</span>
              )}
            </div>
            {domain === "others" && (
              <div>
                <Controller
                  name="domainname"
                  rules={{
                    required: "type here is required",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      size="lg"
                      placeholder="Type here"
                      label="Type here"
                      error={Boolean(errors?.domainname?.message)}
                    />
                  )}
                />
                {errors?.domainname?.message && (
                  <span className="text-red-600">
                    {errors?.domainname?.message}
                  </span>
                )}
              </div>
            )}

            <div>
              <Controller
                name="password"
                rules={{
                  required: "password is required",
                  pattern: {
                    //شیش کارکتر یکی بزرگ حد اقل  عدد حروف داشته باشه
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6}$/,
                    message: "please enter password ",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    size="lg"
                    placeholder="enter pass"
                    label="password"
                    error={Boolean(errors?.password?.message)}
                  />
                )}
              />
              {errors?.password?.message && (
                <span className="text-red-600">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div>
              <Controller
                name="passwordconfrim"
                control={control}
                rules={{
                  required: "passwordconfrim is required",
                  validate: (value) =>
                    getValues("password") === value || "passwords do not match",
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    size="lg"
                    placeholder="confrim password"
                    label="confrim password"
                    error={Boolean(errors?.passwordconfrim?.message)}
                  />
                )}
              />
              {errors?.passwordconfrim?.message && (
                <span className="text-red-600">
                  {errors?.passwordconfrim?.message}
                </span>
              )}
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-5">
              <Button variant="outlined" type="reset" onClick={()=>reset()}>
                Reset
              </Button>
              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default App;
