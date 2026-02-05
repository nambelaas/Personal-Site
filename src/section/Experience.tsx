import { TypographyP } from "@/components/TypographyP";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Badge } from "~/components/ui/badge";
import { TypographyH2 } from "@/components/TypographyH2";
import { TypographyLarge } from "@/components/TypographyLarge";
import { TypographySmall } from "@/components/TypographySmall";
import { Button } from "~/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <>
      <div id="experience" className="py-30">
        <TypographyH2 text="Experience" />
        <div className="flex flex-col md:flex-row mt-12">
          <div id="work" className="flex flex-col gap-8 basis-1/3 border-b-2 border-dotted md:border-r-2 border-gray-400 pb-6 md:pb-0 md:pr-3">
            <TypographyLarge text="Work" />
            <div className="flex flex-col gap-4">
              <div id="card1">
                <Card className="h-full shadow-none bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-(--custom-dark-color-2)">
                      Junior Software Engineer
                    </CardTitle>
                    <CardDescription className="text-(--custom-dark-color-3)">
                      Icube By Sirclo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TypographyP
                      text="Worked on backend services, APIs, and internal tools used in production systems."
                      className="text-(--custom-dark-color-3)"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between">
                    <TypographyP
                      text="October 2022 - May 2025"
                      className="text-(--custom-dark-color-3)"
                    />
                    <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                      Full Time
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
              <div id="card2">
                <Card className="h-full shadow-none bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-(--custom-dark-color-2)">
                      UI/UX Design
                    </CardTitle>
                    <CardDescription className="text-(--custom-dark-color-3)">
                      Skilvul
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TypographyP
                      text="Assisted in designing interfaces and improving user experience for internal projects."
                      className="text-(--custom-dark-color-3)"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between">
                    <TypographyP
                      text="August 2021 - December 2021"
                      className="text-(--custom-dark-color-3)"
                    />
                    <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                      Intern
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div id="selectedproject" className="flex flex-col gap-8 basis-2/3 pt-6 md:pt-0 md:pl-3">
            <TypographyLarge text="Selected Project" />
            <div className="flex flex-wrap gap-4">
              <div id="card1">
                <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-none bg-gray-50">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl"></div> */}
                  <img
                    src="/image/billing_subscription.jpeg"
                    alt="billing-subscription"
                    className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
                  />
                  <CardHeader>
                    <CardTitle className="text-(--custom-dark-color-2)">Billing Subscription</CardTitle>
                    <CardDescription className="text-justify text-(--custom-dark-color-3)">
                      a subscription project for easily user to buy plan of
                      service from Shopify or Swifthub (Internal Service).
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col flex-wrap gap-3 items-start">
                    <TypographySmall text="Using" className="text-(--custom-dark-color-2)" />
                    <div className="flex flex-row flex-wrap gap-2">
                      <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                        Magento
                      </Badge>
                      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        PHP
                      </Badge>
                      <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                        Docker
                      </Badge>
                      <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                        Rest API
                      </Badge>
                      <Badge className="bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">
                        GraphQL
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        MySQL
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div id="card2">
                <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-none bg-gray-50">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl"></div> */}
                  <img
                    src="/image/swiftads.jpeg"
                    alt="swift-ads"
                    className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
                  />
                  <CardHeader>
                    <CardTitle className="text-(--custom-dark-color-2)">Swift Ads</CardTitle>
                    <CardDescription className="text-justify text-(--custom-dark-color-3)">
                      Microservice for internal projects named swifthub to
                      easily creating ads meta using simplified form and AI
                      suggestion.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col flex-wrap gap-3 items-start">
                    <TypographySmall text="Using" className="text-(--custom-dark-color-2)" />
                    <div className="flex flex-row flex-wrap gap-2">
                      <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                        Magento
                      </Badge>
                      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        PHP
                      </Badge>
                      <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                        Docker
                      </Badge>
                      <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                        Rest API
                      </Badge>
                      <Badge className="bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">
                        GraphQL
                      </Badge>
                      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                        Laravel
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        MySQL
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div id="card3">
                <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-none bg-gray-50">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl"></div> */}
                  <img
                    src="/image/swiftconnector.jpeg"
                    alt="swift-connector"
                    className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
                  />
                  <CardHeader>
                    <CardTitle className="text-(--custom-dark-color-2)">Swift Ads</CardTitle>
                    <CardDescription className="text-justify text-(--custom-dark-color-3)">
                      Microservice for internal projects named Swifthub to
                      manage product, order, shipping from several marketplace
                      like Shopee, Tiktokshop, Lazada, Blibli.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col flex-wrap gap-3 items-start">
                    <TypographySmall text="Using" className="text-(--custom-dark-color-2)" />
                    <div className="flex flex-row flex-wrap gap-2">
                      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                        Laravel
                      </Badge>
                      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        PHP
                      </Badge>
                      <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                        Rest API
                      </Badge>
                      <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                        RabbitMQ
                      </Badge>
                      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                        Redis
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        MySQL
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </div>
              <div id="card4">
                <Card className="relative mx-auto w-full max-w-sm pt-0 shadow-none bg-gray-50">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35 rounded-t-xl"></div> */}
                  <img
                    src="/image/tiketin-go.png"
                    alt="tiketin-go"
                    className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
                  />
                  <CardHeader>
                    <CardAction>
                      <Button asChild variant="outline">
                        <a href="https://github.com/nambelaas/tiketin-go" target="blank">
                          <ArrowUpRight />
                        </a>
                      </Button>
                    </CardAction>
                    <CardTitle className="text-(--custom-dark-color-2)">Tiketin</CardTitle>
                    <CardDescription className="text-justify text-(--custom-dark-color-3)">
                      Personal project to manage event ticketing systems,
                      allowing organizers to create and manage events, handle
                      ticket sales, and collect attendee reviews. The platform
                      streamlines event management and provides an integrated
                      solution for both event organizers and participants.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col flex-wrap gap-3 items-start">
                    <TypographySmall text="Using" className="text-(--custom-dark-color-2)"/>
                    <div className="flex flex-row flex-wrap gap-2">
                      <Badge className="bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                        Go
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        Gin
                      </Badge>
                      <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                        Rest API
                      </Badge>
                      <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                        JWT
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        PostgreSQL
                      </Badge>
                      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                        Swagger
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
